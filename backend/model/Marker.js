const {Schema, model, mongoose} = require('mongoose');

const MarkerSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        latlong: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tags: [{
            type: String,
            required: true,
        }],
        user: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);
mongoose.models = {}

module.exports = Media = model("Marker", MarkerSchema)
