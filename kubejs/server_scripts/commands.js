const PklEvaluator = Java.loadClass('github.jodevnull.minepkl.core.PklEvaluator');
const ExternalResources = Java.loadClass('github.jodevnull.minepkl.core.resources.ExternalResources');

ServerEvents.customCommand('minepkl-reload-external', (event) => {
    event.player.sendSystemMessage('[pkl] Reloading external files...');
    ExternalResources.generateExternalFiles();

    if (PklEvaluator.hasError()) {
        event.player.sendSystemMessage(`[pkl] Error generating files:`)
        event.player.sendSystemMessage(PklEvaluator.popError());
    }
})
