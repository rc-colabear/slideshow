const cloudinary = require('./cloudinary').cloudinary;
const storeUntaggedCount = require('./_resources').storeUntaggedCount;

export default async function (req, res, next) {
  const { public_id, tag } = req.query;

  console.log(public_id);
  console.log(tag);
  // eslint-disable-next-line handle-callback-err
  cloudinary.uploader.remove_tag(tag, [public_id], function (error, result) {
    storeUntaggedCount();

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.json(result);
  });
}
