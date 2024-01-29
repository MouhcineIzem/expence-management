import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProjectService, Project } from './app.service';

@Controller('expense')
export class AppController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('create-project')
  createProject(@Body() project: Project) {
    return this.projectService.createProject(project);
  }

  @Get()
  getProjects() {
    return this.projectService.getProjects();
  }

  @Post('calculate-expenses')
  calculateExpenses(@Body() expensesData) {
    const { projectName, participants } = expensesData;
    const totalAmount = participants.reduce((sum, participant) => sum + participant.amount, 0);
    const individualShare = totalAmount / participants.length;

    const results = participants.map(participant => ({
      name: participant.name,
      amount: participant.amount - individualShare,
    }));

    return {
      projectName,
      results,
    };
  }
}
