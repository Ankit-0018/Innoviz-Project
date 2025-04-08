const formatDate = require('../utils/formatDate');
const celebrationResponses = require('../responses/celebration');

module.exports = (req, res) => {
  const { queryText, intent, parameters } = req.body.queryResult;
  const intentName = intent.displayName;

  console.log("Intent:", intentName);
  console.log("User Message:", queryText);
  console.log("Parameters:", parameters);

  if (parameters.date && parameters.time) {
    console.log("Formatted Date:", formatDate(parameters.date));
    console.log("Formatted Time:", formatDate(parameters.time, true));
  }

  switch (intentName) {
    case "track-order":
      const orderId = parameters.tracking_id;
      return res.json({
        fulfillmentText: `✅ Your order #${orderId} is currently being processed!`
      });

    case "book-celebration":
      return res.json({
        fulfillmentText: celebrationResponses.random()
      });

    case "menu":
      return res.json({
        fulfillmentMessages: [
          {
            platform: "DIALOGFLOW_MESSENGER",
            payload: {
              richContent: [[
                {
                  type: "image",
                  rawUrl: "https://marketplace.canva.com/EAFwRADHMsM/1/0/1035w/canva-orange-and-black-bold-geometric-restaurant-menu-AX4bhelWqNA.jpg",
                  accessibilityText: "Menu Image"
                },
                {
                  type: "button",
                  text: "View Full PDF Menu",
                  link: "https://marketplace.canva.com/EAFwRADHMsM/1/0/1035w/canva-orange-and-black-bold-geometric-restaurant-menu-AX4bhelWqNA.jpg",
                  icon: { type: "article" }
                }
              ]]
            }
          },
          {
            text: { text: ["📋 Here’s our menu! You can also view the full PDF above."] }
          }
        ]
      });

   
  }
};
