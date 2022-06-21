// useEffect ele serve basicamente para disparar uma função quando algo acontecer na aplicação
// exemplo: uma variavel mudou e ele irá avisar para API.
//  useEffect(() => {}, [])

import { useState, useEffect } from "react";
import { RepositoryItem } from "./repositoryItem";

import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Fabi0Pt/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
