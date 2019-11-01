const db = require('../../../models');
require('date-utils');

exports.AllData = async(req, res) => {
    try {
        let reports = await db.Report.getAllData()
        .catch(err => {
            console.log(err);
        })

        return res.status(200).send({
            data: reports
        });
    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: "서버에러"
        });
    }
}

exports.Report = async(req, res) => {
    try {
        const { content } = req.body;
        const UserId = req.user.id;

        let data = { content, UserId };
        const report = await db.Report.Create(data);

        let imageElement = req.file;
        let path = String(imageElement.path).split('public');
        const ReportId = report.id;
        path = path[1];
        data = { path, ReportId };
        const image = await db.Image.Create(data);

        return res.status(200).send({
            status: 200,
            data: report,
        });
    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: "서버에러"
        });
    }
}

exports.State = async(req, res) => {
    try {
        const { rescueState } = req.body;
        const  id = req.params.id;

        db.Report.change(id, rescueState)
        .then(data => {
            return res.status(200).send('수정완료');
        })
        .catch(err => {
            console.log(err);
        })
    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: "서버에러"
        });
    }
}

exports.detail = async(req, res) => {
    try {
        const id = req.params.id;

        const inf = await db.Report.getDetailData(id);

        return res.status(200).json(inf);
    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: "서버에러"
        });
    }
}

exports.data = async(req, res) => {
    const data = await db.Report.getData();

    return res.status(200).send({
        data: data
    })
}