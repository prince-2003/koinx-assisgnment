
const Card = ({ sentiment, bgColor, icon: Icon }) => {
  return (
    <div className={`w-[380px] md:w-[456px] h-[204px] rounded-xl bg-[${bgColor}] bg-opacity-25`}>
      <div className="p-4 flex">
        <div className={`bg-[${bgColor}] text-white w-11 h-11 rounded-full flex justify-center items-center`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="ml-2 w-[calc(100%-3rem)]">
          <div className="lg:text-sm text-xs font-medium text-[#191C1F]  line-clamp-3 text-ellipsis">
            Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
          </div>
          <div className="text-sm font-normal text-[#3E5765] mt-2 line-clamp-4 text-ellipsis">
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra
            adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque
            lacinia libero enim.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
