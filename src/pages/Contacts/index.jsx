import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { ContactsTable } from "../ContactsTable";
import { useContacts } from "./useContacts";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
    headContainer: {
      marginBottom: theme.spacing(3),
    },
  })
);

export const Contacts = () => {
  const classes = useStyles();
  const contacts = useContacts();

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.headContainer}>
          <Typography variant="h3" component="h2">
            Contacts
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return <div>...loading</div>;
            }

            if (contacts.isError) {
              return <div>...error</div>;
            }

<<<<<<< HEAD
    return (
        <Container className={classes.root} >
            <Grid container >
                <Grid item xs={12} className={classes.headContainer}>
                    <Typography variant="h3" component="h2" >
                        Contacts
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <div> {contacts.data[0].name.first} </div>
                </Grid>
            </Grid>
        </Container>
    );
}
=======
            return <ContactsTable data={contacts.data} />;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
};
>>>>>>> bc34e37c4c9ab86eafc8140b0cfdf4c1829f549f
