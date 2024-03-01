// endpoints
export enum EbackendEndpoints{

    // organisation user

    GET_ONE_ORGANISATION_USER = '/organisation-users/user/',
 
    // statistics

    GET_HIGH_LEVEL_REPORT = "/statistics/general-stats",
    GET_ORGANISATION_STATISTICS = '/statistics/organisation/',



    // notifications

    MARK_NOTIFICATION_READ = '/notifications/'
    
}

export enum EhttpMethod{
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT'
}


export enum Gender{
    MALE = "MALE",
    FEMALE = "FEMALE"
}
