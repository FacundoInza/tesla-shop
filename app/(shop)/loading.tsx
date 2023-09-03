import { Card, CardActionArea, CardMedia, Grid, Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <Grid container spacing={4}>
      {Array.from(Array(40).keys()).map((item, i) => (
        <Grid item xs={12} sm={6} lg={4}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Skeleton
                  variant="rectangular"
                  height={"calc(100vh - 480px)"}
                />
              </CardMedia>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
