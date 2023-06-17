const Marker = require("../model/Marker");

exports.getAll = async (req, res)=> {
    try {
        const markers = await Marker.find();
        res.json(markers);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

exports.create = async (req, res)=> {
    const {title, latlong, description, tags, user} = req.body;

    try {
        const createdMarker = await Marker.create({
            title,
            latlong,
            description,
            tags,
            user
        })
        res.json({message: 'Marker created successfuly', createdMarker})
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}