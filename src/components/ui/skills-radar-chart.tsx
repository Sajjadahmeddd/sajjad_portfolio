import { useEffect, useRef } from "react";

interface SkillData {
  label: string;
  value: number; // 0-100
}

interface SkillsRadarChartProps {
  skills: SkillData[];
  className?: string;
}

export const SkillsRadarChart = ({ skills, className = "" }: SkillsRadarChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 60;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set styles based on theme
    const isDark = document.documentElement.classList.contains('dark');
    const gridColor = isDark ? '#374151' : '#e5e7eb';
    const labelColor = isDark ? '#d1d5db' : '#374151';
    const fillColor = isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)';
    const strokeColor = isDark ? '#3b82f6' : '#2563eb';

    // Draw concentric circles
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, (radius * i) / 5, 0, 2 * Math.PI);
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw axis lines and labels
    const angleStep = (2 * Math.PI) / skills.length;
    
    skills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      // Draw axis line
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw label
      ctx.fillStyle = labelColor;
      ctx.font = "12px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      const labelX = centerX + (radius + 30) * Math.cos(angle);
      const labelY = centerY + (radius + 30) * Math.sin(angle);
      
      // Adjust text alignment based on position
      if (labelX < centerX) ctx.textAlign = "right";
      else if (labelX > centerX) ctx.textAlign = "left";
      
      ctx.fillText(skill.label, labelX, labelY);
    });

    // Draw skill polygon
    ctx.beginPath();
    skills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const skillRadius = (radius * skill.value) / 100;
      const x = centerX + skillRadius * Math.cos(angle);
      const y = centerY + skillRadius * Math.sin(angle);

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();

    // Fill and stroke
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw skill points
    skills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const skillRadius = (radius * skill.value) / 100;
      const x = centerX + skillRadius * Math.cos(angle);
      const y = centerY + skillRadius * Math.sin(angle);

      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = strokeColor;
      ctx.fill();
    });
  }, [skills]);

  return (
    <div className={`flex justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="max-w-full h-auto"
      />
    </div>
  );
};