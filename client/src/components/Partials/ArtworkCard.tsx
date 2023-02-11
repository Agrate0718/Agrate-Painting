export default function ArtWorkCard(Artwork: any) {
  const Art = Artwork.artwork;
  console.log("artworkCard:", Art);
  return (
    <div className="  ">
      <div className="  max-w-1/3 rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={Art.picture}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${Art.price}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {Art.medium}
          </span>
        </div>
      </div>
    </div>
  );
}
