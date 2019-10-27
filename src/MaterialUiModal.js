import React, { useContext } from 'react';
import { storeContext } from './reducer/storeContext';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({

}));

const MaxWidthDialog = ({ children, title = '' }) => {
    const store = useContext(storeContext);

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const handleOpenPrModal = () => {
        setOpen(true);
    };

    React.useEffect(() => {
        if (open == false) {
            store.dispatch({ type: 'PORTFOLIO_MODAL_ITEM', payload: {} });
        }
    }, [open]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleMaxWidthChange = event => {
        setMaxWidth(event.target.value);
    };

    const handleFullWidthChange = event => {
        setFullWidth(event.target.checked);
    };

    return (
        <React.Fragment>
            {/*<Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open max-width dialog
            </Button>*/}
            <Dialog
                fullWidth={fullWidth}
                //maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    {children ? children : <DialogContentText>
                        You can set my maximum width and whether to adapt or not.
                    </DialogContentText>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

const ResponsiveDialog = ({ children, title = '', site = '' }) => {
    const store = useContext(storeContext);

    const [open, setOpen] = React.useState(true);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

    React.useEffect(() => {
        if (open == false) {
            store.dispatch({ type: 'PORTFOLIO_MODAL_ITEM', payload: {} });
        }
    }, [open]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {/*<Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open responsive dialog
            </Button>*/}
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <div id="responsive-dialog-title">
                    {title}
                    <div className="text-muted">{site}</div>
                </div>
                <DialogContent>
                    {children ? children : <DialogContentText>
                        You can set my maximum width and whether to adapt or not.
                    </DialogContentText>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export {
    MaxWidthDialog,
    ResponsiveDialog
};