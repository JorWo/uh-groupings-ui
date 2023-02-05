/* global UHGroupingsApp */

const threshold = {
    "MULTI_ADD": 100,
    "MULTI_REMOVE": 100,
    "MAX_IMPORT": 100000,
    "MAX_LIST_SIZE": 10
};
UHGroupingsApp.constant("Threshold", threshold);
UHGroupingsApp.constant("Message", {
    Title: {
        IMPORT_OUT_OF_BOUNDS: "Out of Bounds Import Warning",
        SLOW_IMPORT: "Slow Import Warning",
        REMOVE_INPUT_ERROR  : "Error in Input",
        NO_MEMBERS_ADDED: "No Members Were Added",
        INVALID_FILE: "Invalid File",
        ADD_MEMBER: "Add Member",
        ADD_MEMBERS: "Add Members",
        REMOVE_MEMBER: "Remove Member",
        REMOVE_MEMBERS: "Remove Members"
    },
    Body: {
        IMPORT_OUT_OF_BOUNDS: `Importing more than ${threshold.MAX_IMPORT} users is not allowed.`,
        SLOW_IMPORT: "Feel free to exit your browser.",
        REMOVE_INPUT_ERROR: "The members you've attempted to remove do not exist.",
        NO_MEMBERS_ADDED: {with: (listName) => `All the members you attempted to add already exist in the ${listName} list.`},
        ADD_MEMBER: {with: (member, listName) => `${member} has been successfully added to the ${listName} list.`},
        ADD_MEMBERS: {with: (listName) => `All members have been added successfully to the ${listName} list.`},
        REMOVE_MEMBER: {with: (member, listName) => `${member} has been successfully removed from the ${listName} list.`},
        REMOVE_MEMBERS: {with: (listName) => `All selected members have been successfully removed from the ${listName} list.`}
    },
    Csv: {
        GROUP_NOT_LOADED: "Export will be available once all members are loaded.",
        GROUP_LOADED: "Export entire member list to CSV.",
        EMAIL_SUFFIX: "@hawaii.edu"
    }
});
UHGroupingsApp.constant("BASE_URL", "api/groupings/");
UHGroupingsApp.constant("PAGE_SIZE", 700);

UHGroupingsApp.run(function ($rootScope, Threshold) {
    $rootScope.Threshold = Threshold;
});

