import { ServerVM } from "../../App";

const ServerList = ({
  servers,
  selectServer,
  onSelect,
}: {
  servers: ServerVM[];
  selectServer: ServerVM | null;
  onSelect: (v: ServerVM) => void;
}) => {
  return (
    <div className="col-span-6">
      <ul role="list" className="divide-y divide-gray-100">
        {servers.map((el) => (
          <div
            onClick={() => onSelect(el)}
            key={el.customer_id}
            className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-200 cursor-pointer ${
              el.customer_id === selectServer?.customer_id ? "bg-blue-100" : ""
            }`}
          >
            <div>
              <h6 className="block text-lg antialiased font-semibold ">
                {el.server_name}
              </h6>
              <p className="block text-base antialiased font-normal leading-normal text-gray-700">
                {el.server_type}
              </p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ServerList;
