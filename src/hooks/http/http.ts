export const BASE_URL =
  "https://us-central1-hisaab-kitaab-832bd.cloudfunctions.net/api";

export enum PathParameters {
  Accounts = "/accounts",
  Accounts_Add = "/accounts/add",
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
