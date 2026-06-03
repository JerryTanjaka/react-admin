import { useGetList, Title } from "react-admin";
import { useNavigate } from "react-router-dom";
import { useTheme, Card, CardContent, CardActionArea, Stack, Typography, Table, TableHead, TableRow, TableCell, TableBody, Box, Button } from "@mui/material";
import type { ComponentType } from "react";
import PeopleIcon from "@mui/icons-material/People";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BlockIcon from "@mui/icons-material/Block";
import SchoolIcon from "@mui/icons-material/School";
import EuroIcon from "@mui/icons-material/Euro";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const Dashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();

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
    bgColor: string;
    icon: ComponentType<{ sx?: object }>;
    to: string;
  };
  const stats: StatItem[] = [
    {
      label: "Employés",
      value: totalEmployees ?? 0,
      color: theme.palette.primary.main,
      bgColor: theme.palette.mode === "dark" ? "rgba(56, 189, 248, 0.08)" : "rgba(99, 102, 241, 0.08)",
      icon: PeopleIcon,
      to: "/employees",
    },
    {
      label: "Actifs",
      value: activeEmployees ?? 0,
      color: theme.palette.success.main,
      bgColor: theme.palette.mode === "dark" ? "rgba(52, 211, 153, 0.08)" : "rgba(16, 185, 129, 0.08)",
      icon: CheckCircleIcon,
      to: "/employees?filter=%7B%22active%22%3Atrue%7D",
    },
    {
      label: "Inactifs",
      value: (totalEmployees ?? 0) - (activeEmployees ?? 0),
      color: theme.palette.error.main,
      bgColor: theme.palette.mode === "dark" ? "rgba(248, 113, 113, 0.08)" : "rgba(239, 68, 68, 0.08)",
      icon: BlockIcon,
      to: "/employees?filter=%7B%22active%22%3Afalse%7D",
    },
    {
      label: "Stagiaires",
      value: totalInterns ?? 0,
      color: theme.palette.warning.main,
      bgColor: theme.palette.mode === "dark" ? "rgba(251, 191, 36, 0.08)" : "rgba(245, 158, 11, 0.08)",
      icon: SchoolIcon,
      to: "/interns",
    },
    {
      label: "Payés",
      value: paidInterns ?? 0,
      color: theme.palette.success.main,
      bgColor: theme.palette.mode === "dark" ? "rgba(52, 211, 153, 0.08)" : "rgba(16, 185, 129, 0.08)",
      icon: EuroIcon,
      to: "/interns?filter=%7B%22paid%22%3Atrue%7D",
    },
    {
      label: "Non payés",
      value: (totalInterns ?? 0) - (paidInterns ?? 0),
      color: theme.palette.text.secondary,
      bgColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
      icon: MoneyOffIcon,
      to: "/interns?filter=%7B%22paid%22%3Afalse%7D",
    },
  ];

  return (
    <Box>
      <Title title="Tableau de bord" />

      <Stack direction="row" spacing={2} sx={{ mt: 3, mb: 4 }}>
        {stats.map((stat) => (
          <Card
            key={stat.label}
            sx={{
              flex: 1,
              overflow: "visible",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: `linear-gradient(90deg, ${stat.color}, ${stat.color}88)`,
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
              },
            }}
          >
            <CardActionArea onClick={() => navigate(stat.to)} sx={{ height: "100%" }}>
              <CardContent sx={{ position: "relative", pt: 2.5, pb: "16px !important" }}>
                <Box
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: stat.bgColor,
                  }}
                >
                  <stat.icon sx={{ fontSize: 22, color: stat.color }} />
                </Box>
                <Typography variant="h4" fontWeight={700} sx={{ mb: 0.5, fontSize: "1.75rem" }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>

      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Card sx={{ flex: 1 }}>
          <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Répartition par département
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Département</TableCell>
                  <TableCell align="right">Employés</TableCell>
                  <TableCell align="right">Stagiaires</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deptBreakdown.map((d) => (
                  <TableRow key={d.name} hover sx={{ cursor: "pointer" }} onClick={() => navigate(`/employees?filter=${encodeURIComponent(JSON.stringify({ department: d.name }))}`)}>
                    <TableCell sx={{ fontWeight: 500 }}>{d.name}</TableCell>
                    <TableCell align="right">{d.employees}</TableCell>
                    <TableCell align="right">{d.interns}</TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" fontWeight={600}>
                        {d.employees + d.interns}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card sx={{ flex: 0.7 }}>
          <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Aperçu salaires
            </Typography>
            <Stack spacing={2}>
              {[
                { label: "Masse salariale employés", value: totalSalary },
                { label: "Stagiaires payés", value: paidInternSalary },
                { label: "Salaire moyen employés", value: totalSalary / (employees?.length ?? 1) },
              ].map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
                  }}
                >
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    {item.label}
                  </Typography>
                  <Typography variant="h5" fontWeight={700} sx={{ mt: 0.25 }}>
                    {item.value.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Stack>

      <Card sx={{ mb: 4 }}>
        <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Actions rapides
          </Typography>
          <Stack direction="row" spacing={1.5}>
            <Button variant="contained" startIcon={<PersonAddIcon />} onClick={() => navigate("/employees/create")}>
              Nouvel employé
            </Button>
            <Button variant="outlined" startIcon={<GroupAddIcon />} onClick={() => navigate("/interns/create")}>
              Nouveau stagiaire
            </Button>
            <Button variant="outlined" startIcon={<VisibilityIcon />} onClick={() => navigate("/employees")}>
              Voir employés
            </Button>
            <Button variant="outlined" startIcon={<SchoolIcon />} onClick={() => navigate("/interns")}>
              Voir stagiaires
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
