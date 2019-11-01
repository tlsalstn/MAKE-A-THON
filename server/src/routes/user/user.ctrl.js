const bcrypt = require('bcrypt');
const db = require('../../../models');
const jwt = require('../../lib/token');

exports.signIn = async (req, res) => {
    try {
        let { id, name, password, phoneNumber } = req.body;
        password = await bcrypt.hash(password, 12);

        let data = {id, name, password, phoneNumber};

        const user = await db.User.Create(data);

        return res.status(200).send({
            message: "sucess",
            status: 200,
            user: user,
        });
    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: "서버에러"
        });
    }
}

exports.signUp = async (req, res) => {
    try {
        let { id, password } = req.body;
        const user = await db.User.getUser(id);

        const match = await bcrypt.compare(password, user.password);

        if (match) {
            const token = await jwt.createToken(id);
            const refreshToken = await jwt.createRefreshToken(id);

            return res.status(200).send({
                "message": "success",
                "data": {
                    token: token/*, refreshToken*/,
                    "user": user,
                }
            });
        } else {
            return res.status(400).send({
                status: 400,
                message: '아이디 혹은 비밀번호 오류입니다.'
            });
        }
    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: "서버에러"
        });
    }
}

exports.userInfo = async(req, res) => {
    try {
        const id = req.user.id;

        const information = await db.User.getUser(id);

        return res.status(200).send({
            status: 200,
            user: information
        });
    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: "서버에러"
        });
    }
}