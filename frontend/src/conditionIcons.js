import { Droplet, HeartPulse, Gauge, Bean, FlaskConical, Droplets, Activity, Brain, Stethoscope } from 'lucide-react';

const icons = {
  Diabetes: Droplet,
  'Heart Disease': HeartPulse,
  Hypertension: Gauge,
  'Chronic Kidney Disease': Bean,
  'Liver Disease': FlaskConical,
  Anemia: Droplets,
  'Thyroid Disease': Activity,
  Stroke: Brain
};

export const getConditionIcon = (name) => icons[name] || Stethoscope;
