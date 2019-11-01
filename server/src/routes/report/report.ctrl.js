const db = require('../../../models');

exports.AllData = async(req, res) => {
    try {
        const reports = await db.Report.getAllData();

        return res.status(200).send({
            status: 200,
            data: reports,
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
        const { content, category } = req.body;
        const UserId = req.user.id;

        let data = { content, category, UserId };
        const report = await db.Report.Create(data);

        const { path } = req.file;
        const ReportId = report.id;

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
        const { id } = req.params.id;

        db.Report.change(id, rescueState)
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