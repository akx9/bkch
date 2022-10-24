const wsService = require("../../service/wsServiceLayer");

module.exports = createGroup = async (usersId, title, notificationAll) => {
  const chatId = await wsService.createGroup(usersId, title);
  const queryGroups = {
    id: chatId,
    title: title,
    type: "public",
    user_id: null,
    message: "New group created",
    newChat: true,
  };
  notificationAll({
    usersId,
    event: "newChat",
    params: queryGroups,
  });
};
