module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      fday: String,
      fmonth: String,
      fyear: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("Freezeday", schema);
  return Tutorial;
};