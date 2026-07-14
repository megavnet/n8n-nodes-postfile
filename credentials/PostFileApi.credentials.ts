import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class PostFileApi implements ICredentialType {
	name = 'postFileApi';
	displayName = 'PostFile API';
	documentationUrl = 'https://postfile.net/docs';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			placeholder: 'fh_...',
			description: 'Your PostFile API key. Get one free at postfile.net',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-Key': '={{$credentials.apiKey}}',
			},
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://postfile.net/v1',
			url: '/account',
			method: 'GET',
		},
	};
}
