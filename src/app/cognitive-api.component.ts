export abstract class CognitiveApiComponent {
    protected errorMessage = '';
    protected isLoading: boolean;

    public onFileDialogOpen(event: Event) {
        event.preventDefault();
        $(event.target).next().click(); // click the input file textbox
        return false;
    }

}
