const db = require('../../../models');

exports.Check = async(req, res) => {
    try {
        const id = req.params.id;

        const time = await db.Time.getData(id);
    
        return res.status(200).send(time);    
    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: "서버에러"
        });
    }
}

exports.ArrivalTime = async(req, res) => {
    try {
        const { arriveTime } = req.body;
        const id = req.params.id;

        const data = { id, arriveTime };
        const time = await db.Time.Create(data);

        return res.status(200).send(time);
    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: "서버에러"
        });
    }
}