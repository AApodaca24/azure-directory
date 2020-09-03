const { BlobServiceClient, BlockBlobClient } = require("@azure/storage-blob");
const ONE_MEGABYTE = 1024 * 1024;
const uploadOptions = { bufferSize: 4 * ONE_MEGABYTE, maxBuffers: 20 };


const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING;

const blobServiceClient = BlobServiceClient.fromConnectionString(
  AZURE_STORAGE_CONNECTION_STRING
);
// Get a reference to a container
const containerClient = blobServiceClient.getContainerClient("dfdirectory");

const getStream = require("into-stream");

const uploadFile = async (req, res) => {
  console.dir(req.file);
  try {
    const blobName = req.file.originalname;
    const stream = getStream(req.file.buffer);
    const streamLength = req.file.buffer.length;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadRes = await blockBlobClient.uploadStream(stream, uploadOptions.bufferSize, uploadOptions.maxBuffers, { blobHTTPHeaders: { blobContentType: req.file.mimetype}});
    console.dir(uploadRes)
    res.status(200).json(uploadRes)
  } catch (err) {
    console.dir(err);
    res.status(500).json({
      message: "Error",
      error: err.message,
    });
  }
};

module.exports = {
  uploadFile,
};
