import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Map,
  Edit2,
  Trash2,
  Paperclip,
  MoreVertical,
  Equal,
} from "lucide-react";
import clsx from "clsx";

const DraggableAttraction = ({ attraction, index }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: attraction.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1000 : 1,
    opacity: isDragging ? 0.8 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={clsx(
        "bg-white rounded-lg mb-4 relative",
        isDragging ? "shadow-xl" : ""
      )}
    >
      <div className="flex p-2 items-center">
        <div className="flex items-center pr-2" {...attributes} {...listeners}>
          <Equal className="text-gray-400 cursor-grab" />
        </div>

        <div className="flex flex-1">
          <div className="relative w-14 h-14 rounded-lg overflow-hidden mr-3 flex-shrink-0">
            <div className="absolute top-0 left-0 w-6 h-6 bg-purple-500 flex items-center justify-center text-white font-bold text-sm z-10">
              {index + 1}
            </div>
            <img
              src={attraction.image}
              alt={attraction.name}
              className="w-14 h-14 object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-gray-900">{attraction.name}</h3>
              <div className="flex space-x-1">
                <button className="p-2 text-yellow-500">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 107 153"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_986)">
                      <path
                        d="M68.9298 66.4135L90.8975 49.6792L100.651 28.6332C94.1574 16.2368 82.9432 6.6918 69.4601 2.45825L49.1876 16.1499L37.6865 40.2385C41.4246 35.7094 47.0317 32.8581 53.3343 32.8581C64.6528 32.8581 73.7024 42.0119 73.7024 53.226C73.6937 58.242 71.8855 62.8667 68.9298 66.4135Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M53.3211 0C36.891 0 22.3299 7.38045 12.4893 19.0901L21.8605 34.4421L37.6821 40.2491C37.7777 40.1535 69.4644 2.46884 69.4644 2.46884C64.3441 0.886698 58.9282 0 53.3211 0Z"
                        fill="#1A73E8"
                      />
                      <path
                        d="M68.9273 66.416C65.1892 70.8408 59.6256 73.7009 53.323 73.7009C42.0045 73.7009 32.9549 64.547 32.9549 53.3329C32.9549 48.5082 34.9195 43.6922 37.6753 40.2498L14.3341 56.9405L5.31055 78.8124C10.9176 91.0088 20.1672 100.849 29.7123 113.15L54.7313 93.243L68.9273 66.416Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M106.754 53.3335C106.754 44.3796 104.494 36.0168 100.651 28.6364L29.7061 113.151C32.853 117.184 35.9043 121.514 38.9556 126.234C49.7873 142.968 46.5361 153 53.4297 153C60.4191 153 57.3678 142.968 68.1908 126.234C85.9944 98.3899 106.754 85.6979 106.754 53.3335Z"
                        fill="#34A853"
                      />
                      <path
                        d="M37.6849 40.2413L12.4921 19.0909C4.7204 28.3404 0 40.3456 0 53.3331C0 63.365 1.96466 71.5365 5.31154 78.8126L37.6849 40.2413Z"
                        fill="#EA4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_986">
                        <rect width="106.754" height="153" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

                <button className="p-2">
                  <Paperclip className="w-4 h-4  text-gray-500" />
                </button>

                <button className="p-2">
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>

            <div className="flex items-center text-sm text-gray-500 mt-0.5">
              <span className="font-medium">{attraction.rating}</span>
              <span className="mx-2 text-amber-500">★</span>
              <span className="text-gray-400">
                ({attraction.reviews.toLocaleString()})
              </span>
            </div>

            {/* <p className="text-xs text-gray-600 mt-1 line-clamp-2">
              {attraction.description}
            </p> */}

            <div className="mt-2 flex justify-between border-none bg-gray-200 p-2 rounded">
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                {attraction.description}
              </p>
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <Edit2 className="w-3 h-3 text-dark-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-between border-t border-gray-100 px-2 py-1">
        <button className="p-1 hover:bg-gray-100 rounded-full">
          <Edit2 className="w-4 h-4 text-gray-400" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded-full">
          <Map className="w-4 h-4 text-gray-400" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded-full">
          <Trash2 className="w-4 h-4 text-gray-400" />
        </button>
      </div> */}
    </div>
  );
};

export default DraggableAttraction;
