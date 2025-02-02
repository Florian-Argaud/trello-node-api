// Type definitions for trello-node-api

declare class TrelloAction {

    search(actionId: string): Promise<any>;

    searchField(actionId: string, fieldName: string): Promise<any>;

    update(actionId: string, params: any): Promise<any>;

    del(actionId: string): Promise<any>;

}

declare class TrelloBoard {

    create(params: any): Promise<any>;

    search(boardId: string): Promise<any>;

    searchField(boardId: string, fieldName: string): Promise<any>;

    update(boardId: string, params: any): Promise<any>;

    del(boardId: string): Promise<any>;

    searchCards(boardId: string): Promise<any>;

    searchCardsFilter(boardId: string, filter: string): Promise<any>;

    searchChecklists(boardId: string): Promise<any>;

    searchCustomField(boardId: string): Promise<any>;

    searchLabels(boardId: string): Promise<any>;

    searchLists(boardId: string): Promise<any>;

    searchListsFilter(boardId: string, filter: string): Promise<any>;

    searchMembers(boardId: string): Promise<any>;

    searchMemberships(boardId: string): Promise<any>;

    searchPlugins(boardId: string): Promise<any>;

    searchCardsByCardId(boardId: string, cardId: string): Promise<any>;

}

declare class TrelloCard {

    create(params: any): Promise<any>;

    search(cardId: string): Promise<any>;

    searchField(cardId: string, fieldName: string): Promise<any>;

    update(cardId: string, params: any): Promise<any>;

    del(cardId: string): Promise<any>;

    setCustomField(cardId: string, customFieldId: string): Promise<any>;

    searchActions(cardId: string): Promise<any>;

    searchAttachments(cardId: string): Promise<any>;

    searchAttachmentByAttachmentId(cardId: string, attachmentId: string): Promise<any>;

    searchBoard(cardId: string): Promise<any>;

    searchCheckItemStates(cardId: string): Promise<any>;

    searchChecklists(cardId: string): Promise<any>;

    searchCheckItemByCheckItemId(cardId: string, checkItemId: string): Promise<any>;

    searchCustomFieldItems(cardId: string): Promise<any>;

    searchList(cardId: string): Promise<any>;

    searchMembers(cardId: string): Promise<any>;

    searchMembersVoted(cardId: string): Promise<any>;

    searchPluginData(cardId: string): Promise<any>;

    searchStickers(cardId: string): Promise<any>;

    searchStickersByStickerId(cardId: string, stickerId: string): Promise<any>;

}

declare class TrelloChecklist {

    create(params: any): Promise<any>;

    search(checklistId: string): Promise<any>;

    searchField(checklistId: string, fieldName: string): Promise<any>;

    createItems(checklistId: string, params: any): Promise<any>;

    update(checklistId: string, params: any): Promise<any>;

    del(checklistId: string): Promise<any>;

}

declare class TrelloCustomField {

    create(params: any): Promise<any>;

    search(customFieldId: string): Promise<any>;

    searchField(customFieldId: string, fieldName: string): Promise<any>;

    update(customFieldId: string, params: any): Promise<any>;

    del(customFieldId: string): Promise<any>;

}


declare class TrelloEnterprise {

    search(enterpriseID: string): Promise<any>;

}

declare class TrelloLabel {

    create(params: any): Promise<any>;

    search(labelId: string): Promise<any>;

    update(labelId: string, params: any): Promise<any>;

    del(labelId: string): Promise<any>;

}

declare class TrelloList {

    create(params: any): Promise<any>;

    search(listId: string): Promise<any>;

    searchField(listId: string, fieldName: string): Promise<any>;

    update(listId: string, params: any): Promise<any>;

}

declare class TrelloMember {

    search(memberId: string): Promise<any>;

    searchField(memberId: string, fieldName: string): Promise<any>;

    searchBoards(memberId: string): Promise<any>;

}

declare class TrelloNotification {

    search(notificationId: string): Promise<any>;

    searchField(notificationId: string, fieldName: string): Promise<any>;

    update(notificationId: string, params: any): Promise<any>;

}

declare class TrelloOrganization {

    create(params: any): Promise<any>;

    search(organizationId: string): Promise<any>;

    searchField(organizationId: string, fieldName: string): Promise<any>;

    update(organizationId: string, params: any): Promise<any>;

    del(organizationId: string): Promise<any>;

}

declare class TrelloWebhook {

    create(params: any): Promise<any>;

    search(webhookId: string): Promise<any>;

    searchField(webhookId: string, fieldName: string): Promise<any>;

    update(webhookId: string, params: any): Promise<any>;

    del(webhookId: string): Promise<any>;

}


declare class TrelloNodeApi {

    constructor()

    constructor(key: string, token: string);

    setApiKey(key: string): void;

    setOauthToken(token: string): void;

    action: TrelloAction;
    board: TrelloBoard;
    card: TrelloCard;
    checklist: TrelloChecklist;
    customField: TrelloCustomField;
    enterprise: TrelloEnterprise;
    label: TrelloLabel;
    list: TrelloList;
    member: TrelloMember;
    notification: TrelloNotification;
    organization: TrelloOrganization;
    webhook: TrelloWebhook;

}


declare class TrelloError extends Error {
    constructor(message: string);

    static create(options: Object): TrelloError;

    code?: number;
}

declare namespace TrelloNodeApi {

}
export = TrelloNodeApi;