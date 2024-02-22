/* eslint-disable no-unused-expressions */
import { URI } from "@theia/core/lib/common";
import * as React from "@theia/core/shared/react";
import { useState } from "@theia/core/shared/react";
import { FileDialogService } from "@theia/filesystem/lib/browser";
import {
	FileDialogProps,
	OpenFileDialogProps,
} from "@theia/filesystem/lib/browser/file-dialog";
import { FileService } from "@theia/filesystem/lib/browser/file-service";
import { FileStat } from "@theia/filesystem/lib/common/files";

interface InterviewViewProp {
	fileDialogService: FileDialogService;
	fileService: FileService;
}
export const InterviewView = ({
	fileDialogService,
	fileService,
}: InterviewViewProp): JSX.Element => {
	const [srcList, setSrcList] = useState<FileStat[]>([]);
	// To bypass tsc check
	setSrcList


	/**
 	* TODO:	
	*
	* - Create a button that allows user to select a directory using a file select GUI.
	* - After selecting a directory, display all source (.c or .cpp) and header (.h, .hpp) files found
	*   within that directory (including the children directories). Assume there are no symbolic links.
	*/

	// Required types and functions.
	// Use jump to definition to see the full definitions.
	FileDialogProps;
	OpenFileDialogProps;
	FileStat;
	URI;

	/**
	 * Spawn a native file dialog for user to interact with.
	 *
	 * @param props Options for the spawned dialog window.
	 * @param folder The folder to display when the dialog opens. If not provided, a sensible guess to the current working directory will be used.
	 *
	 * @returns A promise that resolves once user makes a selection. Resolves to the URIs of the files/directories that the user selected.
	 */
	fileDialogService.showOpenDialog;
	/**
	 * Try to resolve file information and metadata for the given resource.
	 * @param resource `URI` of the resource that should be resolved.
	 * @param options  Options to customize the resolvement process.
	 *
	 * @return A promise that resolves if the resource could be successfully resolved.
	 */
	fileService.resolve;

	const handleOnClick = async () => {
		// TODO
	};

	// TODO
	return (
		<>
			<button onClick={handleOnClick}> Select file... </button>
			<ul>
				{srcList.map((stat) => {
					return (
						<li key={stat.resource.path.toString()}>
							{" "}
							{stat.resource.path.toString()}{" "}
						</li>
					);
				})}
			</ul>
		</>
	);
};
