import { useState } from "react";
import "./App.css";
import EditForm from "./components/EditForm/EditForm";
import ServerList from "./components/ServerList/ServerList";

export interface ServerVM {
  customer_id: string;
  server_name: string;
  server_type: string;
}

function App() {
  const [serverList, setServerList] = useState<ServerVM[]>([
    {
      customer_id: "user1",
      server_name: "server7",
      server_type: "vds",
    },
    {
      customer_id: "user5",
      server_name: "server2",
      server_type: "dedicated",
    },
    {
      customer_id: "user3",
      server_name: "server4",
      server_type: "hosting",
    },
  ]);

  const [select, setSelect] = useState<ServerVM | null>(null);

  const handleSave = (updatedServer: ServerVM) => {
    const selectedIndex = serverList.findIndex((server) => server === select);

    const updatedServerList = [...serverList];
    updatedServerList[selectedIndex] = updatedServer;

    setServerList(updatedServerList);
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      <ServerList
        servers={serverList}
        selectServer={select}
        onSelect={setSelect}
      />
      <EditForm model={select} onSave={handleSave} />
    </div>
  );
}

export default App;
