import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-section',
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent implements OnInit {
  frontendSkills = [
    { name: 'HTML5, CSS3', value: 0, target: 90 },
    { name: 'JavaScript / TypeScript', value: 0, target: 78 },
    { name: 'React.js, Angular', value: 0, target: 75 },
    { name: 'UI/UX Best Practices', value: 0, target: 80 },
  ];

  backendSkills = [
    { name: 'Python (Flask, pandas, matplotlib)', value: 0, target: 90 },
    { name: 'Node.js (Express)', value: 0, target: 80 },
    { name: 'Java (Spring Boot)', value: 0, target: 85 },
    { name: 'Cloud & DevOps (AWS, Docker, Azure)', value: 0, target: 70 },
  ];

  ngOnInit() {
    this.animateProgress();
  }

  animateProgress() {
    const intervalTime = 50; // Animation speed (ms)
    
    const updateSkill = (skillList: any[]) => {
      skillList.forEach(skill => {
        let currentValue = 0;
        const interval = setInterval(() => {
          if (currentValue >= skill.target) {
            clearInterval(interval);
          } else {
            currentValue += 2;
            skill.value = currentValue;
          }
        }, intervalTime);
      });
    };

    updateSkill(this.frontendSkills);
    updateSkill(this.backendSkills);
  }
}
