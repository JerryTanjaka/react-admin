
import { useGetList, Title } from "react-admin";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActionArea,
  Stack,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import type { ComponentType } from "react";
import PeopleIcon from "@mui/icons-material/People";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BlockIcon from "@mui/icons-material/Block";
import SchoolIcon from "@mui/icons-material/School";
import EuroIcon from "@mui/icons-material/Euro";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";

export const Dashboard = () => {
  const navigate = useNavigate();

  const { total: totalEmployees } = useGetList("employees");
  const { total: activeEmployees } = useGetList("employees", {
    filter: { active: true },
  });
  const { data: employees } = useGetList("employees", {
    pagination: { page: 1, perPage: 50 },
  });
  const { total: totalInterns } = useGetList("interns");
  const { total: paidInterns } = useGetList("interns", {
    filter: { paid: true },
  });
  const { data: interns } = useGetList("interns", {
    pagination: { page: 1, perPage: 50 },
  });

  const depts = ["Informatique", "Marketing", "RH", "Finance"];
  const deptBreakdown = depts.map((dept) => ({
    name: dept,
    employees: employees?.filter((e) => e.department === dept).length ?? 0,
    interns: interns?.filter((i) => i.department === dept).length ?? 0,
  }));

  const totalSalary = employees?.reduce((sum, e) => sum + e.salary, 0) ?? 0;
  const paidInternSalary = interns?.filter((i) => i.paid).reduce((sum, i) => sum + i.salary, 0) ?? 0;

  type StatItem = {
    label: string;
    value: number;
    color: string;
    icon: ComponentType<{ sx?: object }>;
    to: string;
  };
  const stats: StatItem[] = [
    {
      label: "Employés",
      value: totalEmployees ?? 0,
      color: "#7c3aed",
      icon: PeopleIcon,
      to: "/employees",
    },
    {
      label: "Actifs",
      value: activeEmployees ?? 0,
      color: "#388e3c",
      icon: CheckCircleIcon,
      to: "/employees?filter=%7B%22active%22%3Atrue%7D",
    },
    {
      label: "Inactifs",
      value: (totalEmployees ?? 0) - (activeEmployees ?? 0),
      color: "#d32f2f",
      icon: BlockIcon,
      to: "/employees?filter=%7B%22active%22%3Afalse%7D",
    },
    {
      label: "Stagiaires",
      value: totalInterns ?? 0,
      color: "#f57c00",
      icon: SchoolIcon,
      to: "/interns",
    },
    {
      label: "Stagiaires payés",
      value: paidInterns ?? 0,
      color: "#7b1fa2",
      icon: EuroIcon,
      to: "/interns?filter=%7B%22paid%22%3Atrue%7D",
    },
    {
      label: "Stagiaires non payés",
      value: (totalInterns ?? 0) - (paidInterns ?? 0),
      color: "#9e9e9e",
      icon: MoneyOffIcon,
      to: "/interns?filter=%7B%22paid%22%3Afalse%7D",
    },
  ];

  return (
    <div>
      <Title title="Tableau de bord" />

      <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 4 }}>
        {stats.map((stat) => (
          <Card key={stat.label} sx={{ flex: 1 }}>
            <CardActionArea onClick={() => navigate(stat.to)}>
              <CardContent>
                <stat.icon sx={{ fontSize: 32, color: stat.color, mb: 0.5 }} />
                <Typography variant="h3" color={stat.color} fontWeight="bold">
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>

      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Répartition par département
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Département</TableCell>
                  <TableCell align="right">Employés</TableCell>
                  <TableCell align="right">Stagiaires</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deptBreakdown.map((d) => (
                  <TableRow key={d.name}>
                    <TableCell>{d.name}</TableCell>
                    <TableCell align="right">{d.employees}</TableCell>
                    <TableCell align="right">{d.interns}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Aperçu salaires
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
              <div>
                <Typography variant="body2" color="text.secondary">
                  Masse salariale employés
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {totalSalary.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                </Typography>
              </div>
              <div>
                <Typography variant="body2" color="text.secondary">
                  Stagiaires payés
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {paidInternSalary.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                </Typography>
              </div>
              <div>
                <Typography variant="body2" color="text.secondary">
                  Salaire moyen employés
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {(totalSalary / (employees?.length ?? 1)).toLocaleString("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </Typography>
              </div>
            </Stack>
          </CardContent>
        </Card>
      </Stack>

    </div>
  );
};
