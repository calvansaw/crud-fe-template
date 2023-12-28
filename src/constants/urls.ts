// Auth
export const DOMAIN_URL = "http://localhost:3000";
export const API_URL = "http://localhost:8080";
export const CLIENT_ID = "7au4ti4oj44090o8uqoueins3s";
export const REDIRECT_URL = `${DOMAIN_URL}/login`;
export const AUTH_DOMAIN_URL =
  "https://csaw.auth.ap-southeast-1.amazoncognito.com";
export const AUTHORIZE_URL = `${AUTH_DOMAIN_URL}/oauth2/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}`;
export const REVOKE_URL = `${AUTH_DOMAIN_URL}/oauth2/revoke`;
export const LOGOUT_URL = `${AUTH_DOMAIN_URL}/logout?client_id=${CLIENT_ID}&logout_uri=${REDIRECT_URL}`;
export const TOKEN_URL = `${AUTH_DOMAIN_URL}/oauth2/token`;
