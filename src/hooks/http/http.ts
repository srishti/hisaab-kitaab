export const BASE_URL =
  "https://us-central1-hisaab-kitaab-832bd.cloudfunctions.net/api";

export enum PathParameters {
  BankAccounts = "/bankaccounts",
  BankAccounts_Create = "/bankaccounts/create",
  BankTransactions_Reconcile = "/banktransactions/reconcile",
  BankTransactions_Reconcile_Confirm = "/banktransactions/reconcile/confirm",
  Accounts = "/accounts",
  Accounts_Add = "/accounts/add",
  Account_Link = "/accounts/link",
  Account_Linked = "/accounts/linked",
  Transactions = "/transactions",
  Transactions_Add = "/transactions/add",
}

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
}

export const COMMON_HEADERS = {
  "Content-Type": "application/json",
};

export interface RequestConfig {
  url: RequestInfo;
  config?: RequestInit;
}
