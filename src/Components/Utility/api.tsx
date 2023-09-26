import axios from "axios";
// interface Props {
//   getRandomTask: () => void;
// }

const getRandomTask = async () => {
  const response = await axios.get(
    "https://random-data-api.com/api/v2/appliances?size=2&is_xml=true",
    {
      headers: {},
      params: {
        size: 1,
      },
    }
  );

  return response;
};

export {getRandomTask};
