const command = process.argv[2];
const params = process.argv.slice(3);

const FarmController = require("./Controllers/FarmController.js")

switch (command) {
    case "help":
        FarmController.help();
        break;

    case "show":
        FarmController.show();
        break;
    
    case "create":
        FarmController.create(params);
        break;
    
    case "detail":
        FarmController.detail(params);
        break;

    case "add":
        FarmController.add(params);
        break

    case "sell":
        FarmController.sell(params);
        break;

    case "totalProduce":
        FarmController.totalProduce(params);
        break;

    case "sort":
        FarmController.sort(params);
        break;

    default:
        FarmController.default();
        break;

}