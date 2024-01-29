import { useEffect, useState } from "react";
import { ServerVM } from "../../App";

const EditForm = ({
  model,
  onSave,
}: {
  model: ServerVM | null;
  onSave: any;
}) => {
  const [serverName, setServerName] = useState<string>();
  const [serverType, setServerType] = useState<string>();
  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave({
      ...model,
      server_name: serverName,
      server_type: serverType,
    });
  };

  const handleCancel = () => {
    if (model) {
      setServerName(model.server_name);
      setServerType(model.server_type);
    }
  };

  useEffect(() => {
    if (model) {
      setServerName(model.server_name);
      setServerType(model.server_type);
    }
  }, [model]);

  if (!model)
    return (
      <div className="col-span-6 p-4">Выберите сервер для редактирования</div>
    );

  return (
    <form
      onSubmit={handleSave}
      className="col-span-6 p-4 border border-gray-300 rounded"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Имя сервера:
        </label>
        <input
          className="mt-1 p-2 border rounded-md w-full"
          type="text"
          value={serverName}
          onChange={(e) => setServerName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Тип сервера:
        </label>
        <select
          className="mt-1 p-2 border rounded-md w-full"
          value={serverType}
          onChange={(e) => setServerType(e.target.value)}
        >
          <option value="vds">VDS</option>
          <option value="dedicated">Dedicated</option>
          <option value="hosting">Hosting</option>
        </select>
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Сохранить
        </button>
        <button
          onClick={handleCancel}
          className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
        >
          Отмена
        </button>
      </div>
    </form>
  );
};

export default EditForm;
