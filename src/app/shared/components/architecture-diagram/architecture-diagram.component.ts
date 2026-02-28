import { Component } from '@angular/core';

export interface ArchNode {
  id: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-architecture-diagram',
  standalone: true,
  templateUrl: './architecture-diagram.component.html',
  styleUrls: ['./architecture-diagram.component.scss'],
})
export class ArchitectureDiagramComponent {
  selectedNode: ArchNode | null = null;

  nodes: ArchNode[] = [
    { id: 'frontend', label: 'Ionic Angular', description: 'Cross-platform mobile & web apps with reusable components, reactive forms, and optimized routing.' },
    { id: 'backend', label: 'Node.js', description: 'Scalable REST APIs, real-time WebSockets, and server-side logic with Express/Fastify.' },
    { id: 'database', label: 'PostgreSQL', description: 'Relational data modeling, ACID compliance, indexing, and complex queries.' },
    { id: 'server', label: 'Local Server', description: 'Deployment, CI/CD, monitoring, and infrastructure management.' },
  ];

  selectNode(node: ArchNode): void {
    this.selectedNode = this.selectedNode?.id === node.id ? null : node;
  }
}
