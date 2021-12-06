import { gql } from '@apollo/client';

import { REPOSITORY_BASE_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
    query getRepositories(
        $orderDirection: OrderDirection,
        $orderBy: AllRepositoriesOrderBy,
        $searchKeyword: String,
        $first: Int,
        $after: String
    ) {
        repositories(
            orderDirection: $orderDirection,
            orderBy: $orderBy,
            searchKeyword: $searchKeyword,
            first: $first,
            after: $after
        ) {
            edges {
                node {
                    ...repositoryBaseFields
                }
                cursor
            },
            pageInfo {
                startCursor
                endCursor
                hasNextPage
            }
        }
    }

    ${REPOSITORY_BASE_FIELDS}
`;

export const GET_SINGLE_REPO = gql`
    query getSingleRepository($id: ID!) {
        repository(id: $id) {
            ...repositoryBaseFields
            url
            createdAt
            watchersCount
            openIssuesCount
            reviews {
                edges {
                    node {
                        id
                        rating
                        createdAt
                        text
                        user {
                            id
                            username
                        }
                    }
                }
            }
        }
    }

    ${REPOSITORY_BASE_FIELDS}
`;

export const GET_USER = gql`
    query getUser {
        authorizedUser {
            id
            username
        }
    }
`;