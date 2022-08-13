import React from 'react';
import { Divider, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavLink from './components/NavLink';
import Me from './resources/me.jpg';

const useStyles = makeStyles({
    root: {
        padding: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    body: {
        maxWidth: 1200
    }
});

const Content = ({ children }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} justifyContent="center">
            <Grid item container spacing={2} className={classes.body}>
                <Grid item container md={3} sm={12} flexDirection="column">
                    <Paper>
                        <img src={Me} alt="Me" style={{ width: '100%', objectFit: 'contain' }} />
                        <div style={{ padding: 15 }}>
                            <Typography variant="body1">
                                You found my blog! I'm Joel Rummel, a computer scientist from the University of Michigan.
                                This is where I ramble about software, sports, politics, and entertainment.
                            </Typography>
                            <Divider style={{ marginTop: 15, marginBottom: 15 }} />
                            <Typography variant="body1">Find posts by topic:</Typography>
                            <ul>
                                <li>
                                    <NavLink to="/asdfasdf">Software</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Sports</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Politics</NavLink>
                                </li>
                            </ul>
                        </div>
                    </Paper>
                </Grid>
                <Grid item container md={9} sm={12} flexDirection="column">
                    <Paper style={{ padding: 30, marginBottom: 30 }}>
                        <Typography variant="h3">The More Things Change For Michigan Football, The More They Stay The Same</Typography>
                        <Typography variant="body2" style={{ marginTop: 10 }}>November 3, 2021 --- Filed under: Sports, College Football</Typography>
                        <p>
                            Death, taxes, and an under-qualified Alabama team getting squeezed into the top four of
                            the College Football Playoff rankings.
                        </p>
                        <p>
                            Last weekend, the committee behind the Power 5 Playoff Invitational produced the most
                            ass-backwards rankings we've ever seen.
                            Three-loss Mississippi State is in the top 20, one-loss Michigan is over undefeated Oklahoma,
                            and Cincinnati was blatantly disrespected by being blocked from the top five. It seemed like
                            after the top five were decided upon, the next 20 ranking positions were
                            precariously placed solely to justify the selection of top five.
                        </p>
                        <p>
                            While the committee is busy taking shots for every SEC team they can wiggle into the playoffs,
                            Chairman Gary Barta will tell you that lower-ranked teams simply haven't passed the "eye test". How's this for an eye test:
                            Cincinatti beat #10 Notre Dame on the road while Alabama lost to then-unranked Texas A&M. Oregon
                            lost to a weak Stanford team while UTSA hasn't lost yet. Hell, why even bother looking at wins and
                            losses anymore when we can just see how good each school's last recruiting classes were?
                        </p>
                        <p>
                            I cannot even begin to describe how absurd it is that one of the country's most popular sports leagues
                            decides who gets to compete for a championship based on something that is literally, professionally
                            referred to as the "eye test". In no other sport would it ever be permissible to arbitrarily exclude
                            97% of the league from championship contention based on the whims of a small room of old guys. Of course,
                            college football poses its own unique challenges that make it impossible to simply follow in the footsteps
                            of other sports or leagues. But come on, is this really the best we can do?
                        </p>
                        <p>
                            Why is it beyond such a lucrative sport to use a ranking system that's even slightly objective? Maybe
                            there's a lot of objective measurements and statistics being used to decide the rankings, but how are
                            we supposed to know when we have not been offered even a shred of transparency into the system? We have
                            whatever reasoning gets coughed up by members of the committee, but then those goalposts are magically
                            moved anytime a school with a lesser brand name approaches them. Tell me, what else is Cincinatti realistically
                            supposed to do to be ranked even #4?
                        </p>
                        <p>
                            In case you were wondering, there is no answer to that question. Sorry, Cincinatti. Maybe we'll include you in the playoffs
                            once they're expanded to eight teams! Better hope we don't move the goalposts again once that happens...
                        </p>
                    </Paper>
                    <Paper style={{ padding: 30 }}>
                        <Typography variant="h3">The College Football Playoff Rankings Are a Crock of Shit</Typography>
                        <Typography variant="body2" style={{ marginTop: 10 }}>November 3, 2021 --- Filed under: Sports, College Football</Typography>
                        <p>
                            Death, taxes, and an under-qualified Alabama team getting squeezed into the top four of
                            the College Football Playoff rankings.
                        </p>
                        <p>
                            Last weekend, the committee behind the Power 5 Playoff Invitational produced the most
                            ass-backwards rankings we've ever seen.
                            Three-loss Mississippi State is in the top 20, one-loss Michigan is over undefeated Oklahoma,
                            and Cincinnati was blatantly disrespected by being blocked from the top five. It seemed like
                            after the top five were decided upon, the next 20 ranking positions were
                            precariously placed solely to justify the selection of top five.
                        </p>
                        <p>
                            While the committee is busy taking shots for every SEC team they can wiggle into the playoffs,
                            Chairman Gary Barta will tell you that lower-ranked teams simply haven't passed the "eye test". How's this for an eye test:
                            Cincinatti beat #10 Notre Dame on the road while Alabama lost to then-unranked Texas A&M. Oregon
                            lost to a weak Stanford team while UTSA hasn't lost yet. Hell, why even bother looking at wins and
                            losses anymore when we can just see how good each school's last recruiting classes were?
                        </p>
                        <p>
                            I cannot even begin to describe how absurd it is that one of the country's most popular sports leagues
                            decides who gets to compete for a championship based on something that is literally, professionally
                            referred to as the "eye test". In no other sport would it ever be permissible to arbitrarily exclude
                            97% of the league from championship contention based on the whims of a small room of old guys. Of course,
                            college football poses its own unique challenges that make it impossible to simply follow in the footsteps
                            of other sports or leagues. But come on, is this really the best we can do?
                        </p>
                        <p>
                            Why is it beyond such a lucrative sport to use a ranking system that's even slightly objective? Maybe
                            there's a lot of objective measurements and statistics being used to decide the rankings, but how are
                            we supposed to know when we have not been offered even a shred of transparency into the system? We have
                            whatever reasoning gets coughed up by members of the committee, but then those goalposts are magically
                            moved anytime a school with a lesser brand name approaches them. Tell me, what else is Cincinatti realistically
                            supposed to do to be ranked even #4?
                        </p>
                        <p>
                            In case you were wondering, there is no answer to that question. Sorry, Cincinatti. Maybe we'll include you in the playoffs
                            once they're expanded to eight teams! Better hope we don't move the goalposts again once that happens...
                        </p>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Content;