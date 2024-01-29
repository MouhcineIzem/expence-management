import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  expense: number;
}

export interface Project {
  id: number;
  name: string;
  users: User[];
}

@Injectable()
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      name: 'project_1',
      users: [
        {
          name: 'Abdeloihab',
          expense: 500
        },
        {
          name: 'Mouhcine',
          expense: 120
        }
        ]
    }
  ];

  createProject(project: Project): Project {
    const id = this.projects.length + 1;
    const newProject = { id, ...project };
    this.projects.push(newProject);
    return newProject;
  }

  getProjects(): Project[] {
    return this.projects;
  }
}
