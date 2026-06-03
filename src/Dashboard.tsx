
import { useGetList, Card, CardContent, Title } from "react-admin";
import { Stack, Typography } from "@mui/material";

export const Dashboard = () => {
  const { total: totalEmployees } = useGetList("employees");
  const { total: totalInterns } = useGetList("interns");
  const { total: paidInterns } = useGetList("interns", {
    filter: { paid: true },
  });
  const { total: activeEmployees } = useGetList("employees", {
    filter: { active: true },
  });

  const stats = [
    { label: "Employés", value: totalEmployees ?? 0, color: "#1976d2" },
    { label: "Actifs", value: activeEmployees ?? 0, color: "#388e3c" },
    { label: "Stagiaires", value: totalInterns ?? 0, color: "#f57c00" },
    { label: "Stages payés", value: paidInterns ?? 0, color: "#7b1fa2" },
  ];

  return (
    <div>
      <Title title="Tableau de bord" />
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        {stats.map((stat) => (
          <Card key={stat.label} sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h3" color={stat.color} fontWeight="bold">
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
};
