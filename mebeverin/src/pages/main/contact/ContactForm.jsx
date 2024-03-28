import {Box, Container, FormControl, Grid, MenuItem, Select, TextField,} from "@mui/material";
import {useState} from "react";
import {contactTopics} from "./ContactData";
import Checkbox from "../../../components/checkbox/Checkbox";

export default function ContactForm() {
    const [selectedValue, setSelectedValue] = useState('a');

    const [formValues, setFormValues] = useState({
        name: '',
        topic: '',
        company: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleChangeSelect = (event) => {
        const topicValue = event.target.value;
        setFormValues(prevState => ({
            ...prevState,
            topic: topicValue,
        }));
    };

    const selectedTopic = formValues.topic === '' ? '' : formValues.topic;

    return (
        <div className="contact-box-container">
            <Container maxWidth="sm">
                <Box component="form" sx={{mt: 2, marginLeft: '20px', marginRight: '20px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="name"
                                type="text"
                                placeholder="Imię"
                                className="contact-box-input"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="surname"
                                placeholder="Nazwisko"
                                className="contact-box-input"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="email"
                                type="email"
                                placeholder="Adres e-mail"
                                className="contact-box-input"
                                variant="outlined"
                                fullWidth
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <Select
                                    labelId="topic-label"
                                    className={`contact-box-select-input ${formValues.topic === '' ? 'placeholder-selected' : ''}`}
                                    id="topic"
                                    name="topic"
                                    value={selectedTopic}
                                    onChange={handleChangeSelect}
                                    displayEmpty
                                    sx={{textAlign: 'left'}}
                                >
                                    <MenuItem value="" disabled>
                                        Temat kontaktu
                                    </MenuItem>
                                    {contactTopics.map((topic) => (
                                        <MenuItem key={topic.value} value={topic.value} className="menu-item">
                                            {topic.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="message"
                                className="contact-box-textarea-input"
                                placeholder="Treść wiadomości"
                                variant="outlined"
                                multiline
                                rows={10}
                                fullWidth
                            />

                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{marginBottom: '2rem'}}>
                        <div style={{display: 'flex', marginTop: '2rem'}}>
                            <Checkbox/>
                            <div className="information-clause">Potwierdzam, że zapoznałem/am się z poniższą klauzulą
                                informacyjną. Wypełniając obowiązek informacyjny wynikający z art. 13 RODO informujemy,
                                że realizacja usług wiąże się z koniecznością przetworzenia Państwa Danych Osobowych,
                                których podstawą przetwarzania jest art. 6 ust. 1 lit. b RODO. Kontakt z nami jest
                                możliwy poprzez adres e-mail: biuro@mebeverin.pl. Szczegółowe informacje na temat
                                przysługujących Państwu praw i naszych obowiązków dostępne są w Polityce Prywatności.
                            </div>
                        </div>
                        <Box display="flex" justifyContent="center">
                            <button className="contact-send-button">Wyślij</button>
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}