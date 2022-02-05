import initMondayClient from 'monday-sdk-js';
import calcAge from '../utils/calcAge.js';

export const getRecipientEmail = async (token, itemId, emailColumnId) => {
  const emailValue = await getColumnValue(token, itemId, emailColumnId);
  return emailValue.email;
};

export const getRecipientAge = async (token, itemId, birthdayColumnId) => {
  const birthdateValue = await getColumnValue(token, itemId, birthdayColumnId);
  return calcAge(birthdateValue.date);
};

const getColumnValue = async (token, itemId, columnId) => {
  try {
    const mondayClient = initMondayClient({ token });
    const query = ` query ($itemId: [Int], $columnId: [String]) {
      items (ids: $itemId) {
        column_values (ids: $columnId){
          value
        }
      }
    }
    `;

    const variables = { itemId, columnId };
    const columnValue = await mondayClient.api(query, { variables });
    return JSON.parse(columnValue.data.items[0].column_values[0].value);
  } catch (err) {
    console.error(err);
  }
};

export const getItemName = async (token, itemId) => {
  try {
    const mondayClient = initMondayClient({ token });
    const query = ` query ($itemId: [Int]){
      items (ids: $itemId) {
        name
      }
    }
    `;
    const variables = { itemId };
    const itemName = await mondayClient.api(query, { variables });
    return itemName.data.items[0].name;
  } catch (err) {
    console.error(err);
  }
};
