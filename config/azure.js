const { BlobServiceClient, BlockBlobClient } = require("@azure/storage-blob");
const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING;

const blobServiceClient = BlobServiceClient.fromConnectionString(
  AZURE_STORAGE_CONNECTION_STRING
);
// Get a reference to a container
const containerClient = blobServiceClient.getContainerClient("assets");

const uploadFile = async (req, res) => {
    try {
        const file = req.file
        const client = containerClient.getBlockBlobClient(file.filename)
        const response = client.upload(file)
        console.dir(response)
        res.status(200).send(response)
    } catch (error) {
        console.dir(error)
        res.status(500).send({
            message: "Error",
            error
        })
    }
}

module.exports = {
    uploadFile
}