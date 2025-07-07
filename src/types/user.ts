export interface CurrentUserResponse {
  data: {
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    accessedAt: string;
    email: string;
    emailVerification: boolean;
    labels: string[];
    mfa: boolean;
    name: string;
    passwordUpdate: string;
    phone: string;
    phoneVerification: boolean;
    prefs: Record<string, unknown>;
    registration: string;
    status: boolean;
  };
}

export type CurrentUser = CurrentUserResponse["data"];
