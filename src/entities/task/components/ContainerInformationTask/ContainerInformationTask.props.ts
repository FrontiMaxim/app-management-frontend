export interface PropsContainerInformationTask {
    typeInformation: 'DEADLINE' | 'RESOURCES' | 'COMMENTS';
    title: string;
    information?: string;
}
