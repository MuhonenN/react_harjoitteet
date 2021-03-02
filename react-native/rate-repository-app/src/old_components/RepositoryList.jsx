import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
    const { repositories } = useRepositories();

    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            data={repositoryNodes}
        // Other props
        />
    );
};

export default RepositoryList;