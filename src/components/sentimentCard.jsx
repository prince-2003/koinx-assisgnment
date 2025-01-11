import { FaRegNewspaper } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
const Card = ({ bgColor, icon: Icon }) => {
    const bgColorWithOpacity = `${bgColor}40`;
    return (
      <div
        style={{ backgroundColor: bgColorWithOpacity }}
        className="w-[96%] h-auto rounded-xl"
      >
        <div className="p-4 flex">
          <div
            style={{ backgroundColor: bgColor }}
            className="text-white w-11 h-11 rounded-full flex justify-center items-center"
          >
            <Icon className="w-6 h-6" />
          </div>
          <div className="ml-2 w-[calc(100%-3rem)]">
            <div className="lg:text-sm text-xs font-medium text-[#191C1F] line-clamp-3 text-ellipsis">
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
