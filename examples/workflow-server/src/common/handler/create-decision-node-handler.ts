/********************************************************************************
 * Copyright (c) 2022-2024 STMicroelectronics and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
import { GResizeLocation, Point } from '@eclipse-glsp/server';
import { injectable } from 'inversify';
import { ActivityNodeBuilder } from '../graph-extension';
import { ModelTypes } from '../util/model-types';
import { CreateActivityNodeHandler } from './create-activity-node-handler';

@injectable()
export class CreateDecisionNodeHandler extends CreateActivityNodeHandler {
    elementTypeIds = [ModelTypes.DECISION_NODE];
    label = 'Decision Node';

    protected override builder(point?: Point): ActivityNodeBuilder {
        return super.builder(point).addCssClass('decision').resizeLocations(GResizeLocation.CROSS);
    }
}
