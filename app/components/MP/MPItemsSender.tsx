import { createPreferenceEP } from "../utils/Endpoints";
import { MPItem } from "../context/MPContext";

const MPItemsSender = (
  items: MPItem[],
  preferenceIdSetter: (id: string) => void
) => {
  fetch(createPreferenceEP, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(items),
  })
    .then((res) => res.json())
    .then((res) => preferenceIdSetter(res.id))
    .catch((error) => {
      console.error(error);
    });
};

export default MPItemsSender;
