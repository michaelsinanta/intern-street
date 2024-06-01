export interface InternDetails {
    id: string;
    id_int: number;
    name: string;
    additional_title: string;
    code: string;
    total: number;
    requirement: string;
    wishlist: boolean;
    registered: boolean;
    activity_id: ActivityDetails;
    skills: Skill[];
    available_to_apply: boolean;
    is_quota_full: boolean;
    activity_active_id: number;
}

export interface ActivityDetails {
    id: string;
    name: string;
    description: string;
    additional_information: string;
    start_duration: string;
    end_duration: string;
    start_registration: string;
    end_registration: string;
    credits_count: number;
    activity_type: string;
    location: string;
    location_kotakab_code: string;
    mitra_id: string;
    certified: boolean;
}

export interface Skill {
    id: string;
    name: string;
    target: string | null;
    detail: string | null;
    method: string | null;
}
